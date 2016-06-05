/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package paquete;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author LarzRS
 */
public class mainPage extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
     @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        HttpSession sesion = request.getSession();
        String UsName = request.getParameter("UsName");
        sesion.setAttribute("nombreUsuario", UsName);
        String nombreUsuario = (String)sesion.getAttribute("nombreUsuario");
        try (PrintWriter out = response.getWriter()) {
            out.println("<!DOCTYPE html>\n" +
"<html>\n" +
"<head>\n" +
"	<title>Lab de Estadistica II</title>\n" +
"	<link rel=\"stylesheet\" type=\"text/css\" href=\"css/mainPage.css\">\n" +
"	<script type=\"text/javascript\" src=\"js/jquery-1.12.3.min.js\" /></script>\n" +
"	<script type=\"text/javascript\" src=\"js/AjaxPaginas.js\" /></script>\n" +
"</head>\n" +
"<body>\n" +
"	<div id=\"header\"><!--Inicio header-->\n" +
"		<h1>Lab. de Estadistica II</h1>\n" +
"	</div><!--Final header-->\n" +
"	<div id=\"navbar\"><!--Inicio barra de navegación-->\n" +
"		<ul class=\"navlist\">\n" +
"			<li><a href=\"#\" id=\"home\">Home</a></li>\n" +
"			<li><a href=\"#\" id=\"histogramaDeFrecuencias\" onclick=cargarHistogramaDeFrecuencia();>Histogramas de frecuencias</a></li>  <!--IMPORTANTE!!!!! Falta agregar los links para cada página-->\n" +
"			<li><a href=\"#\">Grafica de tallo y hoja</a></li>\n" +
"			<li><a href=\"#\">Grafica de caja</a></li>\n" +
"			<li><a href=\"#\">Grafica de barras comparativas</a></li>\n" +
"			<li id=\"logout\"><a href=\"\">Logout</a></li>\n" +
"		</ul>\n" +
"	</div><!--Final barra de navegación-->\n" +
"	<div id=\"content\"><!--Inicio de contenido-->\n" +
"		<!--El contenido del cuerpo principal de la página se pasara dinamicamente con AJAX-->\n" +
"		<h2>Bienvenido "+nombreUsuario+" al laboratorio de Estadistica II!</h2>\n" +
"		<p>En este laboratorio podras crear:</p>\n" +
"	</div><!--Final de contenido-->\n" +
"	<div id=\"footer\"><!--Inicio footer-->\n" +
"		<ul>\n" +
"			<p>Luiz Angel Romero Serrano. 2016. Todos los derechos reservados</p>\n" +
"			<li id=\"contacto\"><a href=\"\">Contacto</a></li>\n" +
"		</ul>\n" +
"	</div><!--Final footer-->\n" +
"</body>\n" +
"</html>");
        }
    }
}
