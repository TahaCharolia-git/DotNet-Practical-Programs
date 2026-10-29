<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="_7A_AdRotator.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Sponsored Ads</title>
    <style type="text/css">
        body {
            font-family: Arial, sans-serif;
            background: #eef1f5;
            margin: 0;
        }

        .box {
            width: 640px;
            margin: 40px auto;
            background: #ffffff;
            padding: 25px 30px;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.15);
            text-align: center;
        }

        h2 {
            color: #333333;
            margin-top: 0;
        }

        .adinfo {
            display: block;
            margin-top: 15px;
            color: #555555;
            font-size: 14px;
        }

        input[type=submit] {
            margin-top: 15px;
            padding: 9px 22px;
            background: #2c5f2d;
            color: #ffffff;
            border: none;
            border-radius: 4px;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div class="box">
        <h2>Today's Sponsors</h2>

        <asp:AdRotator ID="AdRotator1" runat="server"
            AdvertisementFile="~/advertisements.xml"
            Target="_blank"
            Width="580" Height="180"
            OnAdCreated="AdRotator1_AdCreated">
        </asp:AdRotator>

        <asp:Label ID="lblAd" runat="server" CssClass="adinfo"></asp:Label>

        <br />
        <asp:Button ID="btnNext" runat="server" Text="Show Another Ad"
            OnClick="btnNext_Click" />
    </div>
    </form>
</body>
</html>
