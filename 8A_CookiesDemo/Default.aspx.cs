using System;
using System.Web;
using System.Web.UI;

namespace _8A_CookiesDemo
{
    public partial class Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                ShowCookies();
            }
        }

        protected void btnSave_Click(object sender, EventArgs e)
        {
            string userInfo = txtName.Text + "|" + txtEmail.Text;

            HttpCookie sessionCookie = new HttpCookie("SessionUser");
            sessionCookie.Value = userInfo;
            Response.Cookies.Add(sessionCookie);

            HttpCookie persistentCookie = new HttpCookie("PersistentUser");
            persistentCookie.Value = userInfo;
            persistentCookie.Expires = DateTime.Now.AddDays(7);
            Response.Cookies.Add(persistentCookie);

            lblResult.ForeColor = System.Drawing.Color.Green;
            lblResult.Text = "Cookies saved.";

            ShowLabels(userInfo, userInfo);
        }

        protected void btnRead_Click(object sender, EventArgs e)
        {
            lblResult.ForeColor = System.Drawing.Color.Black;
            lblResult.Text = "Cookies read.";

            ShowCookies();
        }

        protected void btnClear_Click(object sender, EventArgs e)
        {
            HttpCookie sessionCookie = new HttpCookie("SessionUser");
            sessionCookie.Expires = DateTime.Now.AddDays(-1);
            Response.Cookies.Add(sessionCookie);

            HttpCookie persistentCookie = new HttpCookie("PersistentUser");
            persistentCookie.Expires = DateTime.Now.AddDays(-1);
            Response.Cookies.Add(persistentCookie);

            lblResult.ForeColor = System.Drawing.Color.Red;
            lblResult.Text = "Cookies deleted.";

            ShowLabels(null, null);
        }

        private void ShowCookies()
        {
            string sessionValue = null;
            string persistentValue = null;

            if (Request.Cookies["SessionUser"] != null)
            {
                sessionValue = Request.Cookies["SessionUser"].Value;
            }

            if (Request.Cookies["PersistentUser"] != null)
            {
                persistentValue = Request.Cookies["PersistentUser"].Value;
            }

            ShowLabels(sessionValue, persistentValue);
        }

        private void ShowLabels(string sessionValue, string persistentValue)
        {
            lblCookies.Text =
                "Session cookie (SessionUser) : " + FormatValue(sessionValue) + "<br />" +
                "Persistent cookie (PersistentUser) : " + FormatValue(persistentValue);
        }

        private string FormatValue(string value)
        {
            if (string.IsNullOrEmpty(value))
            {
                return "not set";
            }

            string[] parts = value.Split('|');
            return "Name = " + parts[0] + ", Email = " + parts[1];
        }
    }
}
