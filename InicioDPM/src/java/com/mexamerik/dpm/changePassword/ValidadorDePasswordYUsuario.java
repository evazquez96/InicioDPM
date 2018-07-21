package com.mexamerik.dpm.changePassword;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author Eduardo
 */
public class ValidadorDePasswordYUsuario extends HttpServlet {
    
    private String password;
    
    private void validar(){
        
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
                response.setContentType("text/html;charset=UTF-8");

        try (PrintWriter out = response.getWriter()) {
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet ValidadorDePasswordYUsuario</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet ValidadorDePasswordYUsuario at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
                        
            response.setContentType("text/html;charset=UTF-8");

                String user=(String)request.getParameter("user");
                password=(String)request.getAttribute("passwordActual");
                /**
                 * Las líneas anteriores recuperan el usuario y la contraseña
                 * actual que se enviaran desde el formulario.
                 */
                HttpSession session=request.getSession();
                
                session.setAttribute("user",user);//Subimos el nombre de usuario a Session.
        
        try (PrintWriter out = response.getWriter()) {
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet ValidadorDePasswordYUsuario</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet ValidadorDePasswordYUsuario at " + session.getAttribute("user")+ "</h1>");
            out.println("</body>");
            out.println("</html>");
        }

    }


}
