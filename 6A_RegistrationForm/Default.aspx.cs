using System;
using System.Web.UI;

namespace _6A_RegistrationForm
{
    public partial class Default : Page
    {
        protected void btnRegister_Click(object sender, EventArgs e)
        {
            if (Page.IsValid)
            {
                lblMessage.ForeColor = System.Drawing.Color.Green;
                lblMessage.Text = "Registration successful. Welcome " + txtName.Text + "!";
            }
        }
    }
}
