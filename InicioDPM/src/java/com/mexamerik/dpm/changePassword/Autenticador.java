package com.mexamerik.dpm.changePassword;

import com.mexamerik.dpm.Helper.ConnectionManager;
import com.mexamerik.dpm.Helper.Seguridad;
import java.io.IOException;
import java.io.PrintWriter;
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
 * @author HP
 */
public class Autenticador extends HttpServlet {
    
        @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       
        response.setContentType("application/json;charset=UTF-8");

        try (PrintWriter out = response.getWriter()) {
            
            String user = request.getParameter("txtUsr");
            String password=request.getParameter("txtPassActual");
            
            String pass=Seguridad.encriptarConMD5(password);
            int r=ConnectionManager.autenticar(user, pass);
            HttpSession session;
            if(r==1){
                session=request.getSession();
                session.setAttribute("user",user);
                /***
                 * Subimos el atributo que corresponde al usuario a session.
                 */
            }
            out.println(r);

            //response.sendRedirect("/InicioDPM/index.html");
            //Una vez que el servlet actualize las claves se regresara a index.html

        }   catch (SQLException ex) {
                Logger.getLogger(ChangePasswordServlet.class.getName()).log(Level.SEVERE, null, ex);
            }
        
        
    }
    
}
