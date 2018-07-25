package com.mexamerik.dpm.Helper;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class ConnectionManager {
    
    private static String url = "jdbc:mysql://localhost:3306/okmdb";    
    private static String driverName = "com.mysql.jdbc.Driver";   
    private static String username = "root";   
    private static String password = "";
    private static Connection con;
    private static String urlstring;

    public static Connection getConnection() {
        try {
            Class.forName(driverName);
            try {
                con = DriverManager.getConnection(url, username, password);
                System.out.println("Conexión con éxito: ");
            } catch (SQLException ex) {
                // log an exception. fro example:
                System.out.println("Failed to create the database connection."); 
            }
        } catch (ClassNotFoundException ex) {
            // log an exception. for example:
            System.out.println("Driver not found."); 
            ex.printStackTrace();//Se imprimiera el trazado de pila

        }
        return con;
    }
      
    public static int autenticar(String user,String passEncriptada)throws SQLException{
        
        String query="SELECT * FROM okm_user WHERE USR_ID = ? AND USR_PASSWORD  = ?";
        PreparedStatement preparedStatement;
        
        preparedStatement=getConnection().prepareStatement(query);
        preparedStatement.setString(1,user);
        preparedStatement.setString(2,passEncriptada);
        int a=preparedStatement.executeQuery().getRow();
        /***
         * 
         * Se verificara que el usuario y la contraseña que se envie
         * en el formulario sean validos.
         * 
         */
        int total = 0;
while (preparedStatement.getResultSet().next()){
   //Obtienes la data que necesitas...
   total++;
}
        System.out.println(user);
        System.out.println(preparedStatement.toString());
        System.out.println(total);
        return total;
 
    }
    
    
    public static int updateUserPassword(String user,String password) throws SQLException{
        String query="Update okm_user SET USR_PASSWORD= ? WHERE USR_ID= ?";
        PreparedStatement preparedStatement;
        preparedStatement=ConnectionManager.getConnection().prepareStatement(query);
        String pass=Seguridad.encriptarConMD5(password);
        preparedStatement.setString(1,pass);
        preparedStatement.setString(2,user);
        int a=preparedStatement.executeUpdate();
        return a;
        //System.out.println(a);
   //q.setString("password", SecureStore.md5Encode(usrPassword.getBytes()));   
    }
    

}