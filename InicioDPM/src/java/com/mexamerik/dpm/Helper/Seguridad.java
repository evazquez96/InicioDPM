package com.mexamerik.dpm.Helper;

/**
 *
 * @author HP
 */
public class Seguridad {
    
    public static String desencriptarMD5(String cad){
        return null;
    }
    
    
    public static String encriptarConMD5(String md5) {

        try {
            java.security.MessageDigest md = java.security.MessageDigest.getInstance("MD5");
            byte[] array = md.digest(md5.getBytes());
            StringBuffer sb = new StringBuffer();
            for (int i = 0; i < array.length; ++i) {
              sb.append(Integer.toHexString((array[i] & 0xFF) | 0x100).substring(1,3));
           }
            System.out.println(sb.toString());
            return sb.toString();
        } catch (java.security.NoSuchAlgorithmException e) {
            e.printStackTrace();
            /**
             * Se Imprime el trazado de pila, en caso de que se 
             * lanze una exepción.
             */
        }
        return null;
    }
    
}
