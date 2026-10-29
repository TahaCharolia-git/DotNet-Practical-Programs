<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="_6A_RegistrationForm.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Student Registration</title>
    <style type="text/css">
        body {
            font-family: Arial, sans-serif;
            background: #f2f2f2;
            margin: 0;
        }

        .form {
            width: 420px;
            margin: 40px auto;
            background: #ffffff;
            padding: 25px 30px;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        }

        h2 {
            color: #333333;
            text-align: center;
            margin-top: 0;
        }

        .row {
            margin-bottom: 14px;
        }

        .row label {
            display: block;
            font-weight: bold;
            color: #444444;
            margin-bottom: 4px;
        }

        .row input[type=text],
        .row input[type=password] {
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
            border: 1px solid #cccccc;
            border-radius: 4px;
        }

        .error {
            color: #cc0000;
            font-size: 12px;
        }

        input[type=submit] {
            width: 100%;
            padding: 10px;
            background: #2c5f2d;
            color: #ffffff;
            border: none;
            border-radius: 4px;
            font-size: 15px;
        }

        .message {
            display: block;
            text-align: center;
            margin-top: 15px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div class="form">
        <h2>Student Registration</h2>

        <div class="row">
            <label>Full Name</label>
            <asp:TextBox ID="txtName" runat="server"></asp:TextBox>
            <asp:RequiredFieldValidator ID="rfvName" runat="server"
                ControlToValidate="txtName"
                ValidationGroup="reg"
                ErrorMessage="Name is required"
                CssClass="error" Display="Dynamic">
            </asp:RequiredFieldValidator>
        </div>

        <div class="row">
            <label>Email</label>
            <asp:TextBox ID="txtEmail" runat="server"></asp:TextBox>
            <asp:RequiredFieldValidator ID="rfvEmail" runat="server"
                ControlToValidate="txtEmail"
                ValidationGroup="reg"
                ErrorMessage="Email is required"
                CssClass="error" Display="Dynamic">
            </asp:RequiredFieldValidator>
            <asp:RegularExpressionValidator ID="revEmail" runat="server"
                ControlToValidate="txtEmail"
                ValidationGroup="reg"
                ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"
                ErrorMessage="Enter a valid email address"
                CssClass="error" Display="Dynamic">
            </asp:RegularExpressionValidator>
        </div>

        <div class="row">
            <label>Age (18 to 30)</label>
            <asp:TextBox ID="txtAge" runat="server"></asp:TextBox>
            <asp:RangeValidator ID="rvAge" runat="server"
                ControlToValidate="txtAge"
                ValidationGroup="reg"
                Type="Integer"
                MinimumValue="18"
                MaximumValue="30"
                ErrorMessage="Age must be between 18 and 30"
                CssClass="error" Display="Dynamic">
            </asp:RangeValidator>
        </div>

        <div class="row">
            <label>Password</label>
            <asp:TextBox ID="txtPassword" runat="server" TextMode="Password"></asp:TextBox>
            <asp:RequiredFieldValidator ID="rfvPassword" runat="server"
                ControlToValidate="txtPassword"
                ValidationGroup="reg"
                ErrorMessage="Password is required"
                CssClass="error" Display="Dynamic">
            </asp:RequiredFieldValidator>
        </div>

        <div class="row">
            <label>Confirm Password</label>
            <asp:TextBox ID="txtConfirm" runat="server" TextMode="Password"></asp:TextBox>
            <asp:CompareValidator ID="cvPassword" runat="server"
                ControlToValidate="txtConfirm"
                ControlToCompare="txtPassword"
                ValidationGroup="reg"
                Operator="Equal"
                Type="String"
                ErrorMessage="Passwords do not match"
                CssClass="error" Display="Dynamic">
            </asp:CompareValidator>
        </div>

        <asp:Button ID="btnRegister" runat="server" Text="Register"
            ValidationGroup="reg" OnClick="btnRegister_Click" />

        <asp:Label ID="lblMessage" runat="server" CssClass="message"></asp:Label>
    </div>
    </form>
</body>
</html>
