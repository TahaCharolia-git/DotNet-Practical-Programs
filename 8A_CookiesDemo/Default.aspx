<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="_8A_CookiesDemo.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Cookie Demo</title>
    <style type="text/css">
        body {
            font-family: Arial, sans-serif;
            margin: 30px;
        }

        .box {
            width: 440px;
            margin: 0 auto;
            border: 1px solid #cccccc;
            padding: 15px;
        }

        h2 {
            text-align: center;
        }

        .row {
            margin-bottom: 8px;
        }

        .result {
            display: block;
            margin-top: 10px;
            font-weight: bold;
        }

        .info {
            display: block;
            margin-top: 8px;
            background: #f0f0f0;
            border: 1px solid #dddddd;
            padding: 8px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div class="box">
        <h2>Cookie Demo</h2>

        <div class="row">
            Name : <asp:TextBox ID="txtName" runat="server"></asp:TextBox>
        </div>

        <div class="row">
            Email : <asp:TextBox ID="txtEmail" runat="server"></asp:TextBox>
        </div>

        <asp:Button ID="btnSave" runat="server" Text="Save Info"
            OnClick="btnSave_Click" />
        <asp:Button ID="btnRead" runat="server" Text="Read Cookies"
            OnClick="btnRead_Click" />
        <asp:Button ID="btnClear" runat="server" Text="Delete Cookies"
            OnClick="btnClear_Click" />

        <asp:Label ID="lblResult" runat="server" CssClass="result"></asp:Label>

        <asp:Label ID="lblCookies" runat="server" CssClass="info"></asp:Label>
    </div>
    </form>
</body>
</html>
