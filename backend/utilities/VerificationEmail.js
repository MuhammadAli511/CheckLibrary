module.exports = (url, lastName) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  </head>

  <body
    style="
      background-color: #ffffff;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    "
  >
    <table
      align="center"
      role="presentation"
      cellspacing="0"
      cellpadding="0"
      border="0"
      width="100%"
      style="max-width: 37.5em; margin: 0 auto; padding: 20px 0 48px"
    >
      <tr>
        <td>
          <img
            alt="CheckLibrary"
            src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/koala-logo.png"
            width="170"
            height="50"
            style="
              display: block;
              outline: none;
              border: none;
              text-decoration: none;
              margin: 0 auto;
            "
          />
          <p style="font-size: 16px; line-height: 26px; margin: 16px 0">
            Hi ${lastName},
          </p>
          <p style="font-size: 16px; line-height: 26px; margin: 16px 0">
            Welcome to CheckLibrary, the ultimate project management tool for all your needs and teams.
          </p>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            width="100%"
            style="text-align: center"
          >
            <tr>
              <td>
                <a
                  href="${url}"
                  target="_blank"
                  style="
                    background-color: #5f51e8;
                    border-radius: 3px;
                    color: #fff;
                    font-size: 16px;
                    text-decoration: none;
                    text-align: center;
                    display: inline-block;
                    padding: 12px 12px;
                    line-height: 100%;
                    max-width: 100%;
                  "
                  >Verify your email</a
                >
              </td>
            </tr>
          </table>
          <p style="font-size: 16px; line-height: 26px; margin: 16px 0">
            Best,<br />The CheckLibrary team
          </p>
          <hr
            style="
              width: 100%;
              border: none;
              border-top: 1px solid #eaeaea;
              border-color: #cccccc;
              margin: 20px 0;
            "
          />
          <p
            style="
              font-size: 12px;
              line-height: 24px;
              margin: 16px 0;
              color: #8898aa;
            "
          >
            Lower Saxony, Germany
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>
`