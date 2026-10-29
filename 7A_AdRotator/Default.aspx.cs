using System;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace _7A_AdRotator
{
    public partial class Default : Page
    {
        protected void AdRotator1_AdCreated(object sender, AdCreatedEventArgs e)
        {
            lblAd.Text = "Now showing : " + e.AlternateText;
        }

        protected void btnNext_Click(object sender, EventArgs e)
        {
            Response.Redirect(Request.RawUrl);
        }
    }
}
