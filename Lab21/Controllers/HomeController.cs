using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Lab21.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Register()
        {
            return View();
        }

        public ActionResult registerComplete(string firstName, string lastName, string email, string phone, string pass)
        {
            ViewBag.fn = firstName;
            return View();
        }

        public ActionResult doMATH(int a, int b)
        {
            int c = 0;
            List<int> l = new List<int>();
            l.Add(a);
            l.Add(b);
            for (int i = 0; i < 10; i++)
            {
                c = a + b;
                a = b;
                b = c;
                l.Add(c);
            }
            return Content(string.Join(" ",l), "text/plain");
        }

        public ActionResult autoFill()
        {
            string[] s = { "asdf", "asdf", "asdf@asdf.com", "9999999999", "asdf", "asdf" };
            return Json(s, JsonRequestBehavior.AllowGet);
        }
    }
}