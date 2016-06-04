package proyecto;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class SessionTracking extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException 
    {
        PrintWriter out = response.getWriter();
        String UsName = request.getParameter("UsName");
        String UsPass = request.getParameter("UsPass");
        HttpSession sesion = request.getSession();
        sesion.setAttribute(UsName, UsPass);
        String id = sesion.getId();
        out.println(id);
        response.sendRedirect("mainPage");
    }
}
