package com.mexamerik.dpm.changePassword;

import com.mexamerik.dpm.Helper.ConnectionManager;
import com.mexamerik.dpm.Helper.Seguridad;
import java.io.IOException;
import java.io.PrintWriter;
import java.security.Security;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author Eduardo
 * 
 */
public class ChangePasswordServlet extends HttpServlet {
        @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       
        response.setContentType("application/json;charset=UTF-8");

        try (PrintWriter out = response.getWriter()) {
            HttpSession session=request.getSession();
            String user =(String)session.getAttribute("user");
            /**
             * Obtenemos el nombre de usuario que se subio a sessión en
             * Autenticación.java
             */
            System.out.println("\nSe recupero el atributo User: "+ user +"\n");
            String password=request.getParameter("password");
            System.out.println("\nNueva Contraseña:  "+password +"\n");
            String pass=Seguridad.encriptarConMD5(password);
            int r=updateUserPassword(user, password);
            out.println(r);
            response.sendRedirect("/InicioDPM/index.html");
            //Una vez que el servlet actualize las claves se regresara a index.html

        }   catch (SQLException ex) {
                Logger.getLogger(ChangePasswordServlet.class.getName()).log(Level.SEVERE, null, ex);
            }
        
        
    }
    
        public static int updateUserPassword(String user,String password) throws SQLException{
        String query="Update okm_user SET USR_PASSWORD= ? WHERE USR_ID= ?";
        PreparedStatement preparedStatement;
        preparedStatement=ConnectionManager.getConnection().prepareStatement(query);
        String pass=Seguridad.encriptarConMD5(password);
        preparedStatement.setString(1,pass);
        preparedStatement.setString(2,user);
        int a=preparedStatement.executeUpdate();
        System.out.println("Nueva contraseña para "+user +" :"+pass);
        return a;
        //System.out.println(a);
   //q.setString("password", SecureStore.md5Encode(usrPassword.getBytes()));

        
    }
}