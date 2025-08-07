export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Verify Your Email</title>
</head>
<body style="margin:0; padding:0; background:#f0f4f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;">
  <div style="max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 12px 24px rgba(0,0,0,0.1); width: 100%;">

    <!-- Header -->
    <div style="background: linear-gradient(135deg, #4CAF50, #81C784); padding: 50px 20px; text-align: center; border-bottom-left-radius: 80% 30%; border-bottom-right-radius: 80% 30%;">
      <h1 style="margin: 0; color: #ffffff; font-size: 26px; line-height: 1.4;">Verify Your Email</h1>
    </div>

    <!-- Main Content -->
    <div style="padding: 30px 24px; color: #2E3D49; font-size: 16px; line-height: 1.6;">
      <p style="margin-bottom: 1.4em;">Hi there,</p>

      <p style="margin-bottom: 1.4em;">Thanks for signing up! Please use the code below to verify your email address:</p>

      <div style="text-align: center; margin: 32px 0;">
        <span style="display: inline-block; padding: 12px 24px; font-size: 28px; font-weight: bold; color: #388e3c; border: 2px dashed #a5d6a7; border-radius: 10px; letter-spacing: 6px;">
          {verificationCode}
        </span>
      </div>

      <p style="margin-bottom: 1.2em;">Enter this code on the verification screen to complete your registration.</p>
      <p style="margin-bottom: 1.2em;">The code will expire in <strong>15 minutes</strong> for security reasons.</p>

      <p style="margin-bottom: 1.5em;">If you didn’t request this, you can safely ignore this email.</p>

      <p>Thanks and welcome aboard!<br /><strong>The ThinkBoard Team</strong></p>
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding: 18px 20px; font-size: 12px; color: #9E9E9E; background: #f9f9f9; border-top: 1px solid #e0e0e0;">
      This is an automated message. Please do not reply to this email.<br />
      &copy; {year} ThinkBoard. All rights reserved.
    </div>

  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Password Reset Successful</title>
</head>
<body style="margin:0; padding:0; background:#f4f6f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;">
  <div style="max-width:600px; margin: 40px auto; background: #fff; border-radius: 16px; box-shadow: 0 12px 28px rgba(0,0,0,0.1); overflow: hidden;">
    
    <div style="background: linear-gradient(135deg, #4CAF50, #81C784); padding: 50px 20px; text-align: center; border-bottom-left-radius: 80% 30%; border-bottom-right-radius: 80% 30%;">
      <h1 style="color:#fff; margin:0; font-size:24px;">Password Reset Successful</h1>
    </div>
    
    <div style="padding: 30px 24px; font-size:16px; color:#2e3d49; line-height:1.6;">
      <p>Hello,</p>
      <p>Your password has been <strong>successfully reset</strong>.</p>
      <div style="text-align:center; margin: 24px 0;">
        <div style="background-color:#4CAF50; color:#fff; width:60px; height:60px; line-height:60px; font-size:30px; border-radius:50%; display:inline-block;">
          ✓
        </div>
      </div>
      <p>If you didn’t request this, please contact support immediately.</p>
      <p>For better security, we recommend you:</p>
      <ul style="padding-left:20px; margin:20px 0;">
        <li>Use a strong, unique password</li>
        <li>Avoid reusing old passwords</li>
      </ul>
      <p>Thanks for helping us keep your account safe.</p>
      <p>Warm regards,<br/><strong>The ThinkBoard Team</strong></p>
    </div>

    <div style="text-align:center; font-size:12px; color:#888; background:#f9f9f9; padding:15px;">
      This is an automated message. Please do not reply.<br/>
      &copy; {year} ThinkBoard. All rights reserved.
    </div>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Reset Your Password</title>
</head>
<body style="margin:0; padding:0; background:#f4f6f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;">
  <div style="max-width:600px; margin: 40px auto; background:#fff; border-radius:16px; box-shadow: 0 12px 28px rgba(0,0,0,0.1); overflow:hidden;">
    
    <div style="background: linear-gradient(135deg, #4CAF50, #81C784); padding:50px 20px; text-align:center; border-bottom-left-radius:80% 30%; border-bottom-right-radius:80% 30%;">
      <h1 style="color:#fff; margin:0; font-size:24px;">Reset Your Password</h1>
    </div>
    
    <div style="padding: 30px 24px; font-size:16px; color:#2e3d49; line-height:1.6;">
      <p>Hello,</p>
      <p>We received a request to reset your password.</p>
      <p>Click the button below to reset it:</p>

      <div style="text-align:center; margin: 32px 0;">
        <a href="{resetURL}" style="background-color:#4CAF50; color:#fff; padding:14px 24px; border-radius:6px; font-weight:600; text-decoration:none; display:inline-block;">
          Reset Password
        </a>
      </div>

      <p>This link will expire in <strong>1 hour</strong>.</p>
      <p>If you didn't make this request, please ignore this message.</p>
      <p>Regards,<br/><strong>The ThinkBoard Team</strong></p>
    </div>

    <div style="text-align:center; font-size:12px; color:#888; background:#f9f9f9; padding:15px;">
      This is an automated message. Please do not reply.<br/>
      &copy; {year} ThinkBoard. All rights reserved.
    </div>
  </div>
</body>
</html>
`;

export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to ThinkBoard</title>
</head>
<body style="margin:0; padding:0; background:#f0f4f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;">

  <div style="max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 12px 24px rgba(0,0,0,0.1); width: 100%;">

    <!-- Header -->
    <div style="background: linear-gradient(135deg, #4CAF50, #81C784); padding: 50px 20px; text-align: center; border-bottom-left-radius: 80% 30%; border-bottom-right-radius: 80% 30%;">
      <h1 style="margin: 0; color: #ffffff; font-size: 28px; line-height: 1.4; font-weight: 700;">Welcome to ThinkBoard!</h1>
    </div>

    <!-- Main Content -->
    <div style="padding: 30px 24px; color: #2E3D49; font-size: 16px; line-height: 1.6;">
      <p style="margin-bottom: 1.2em;">Hi <strong style="color: #388e3c;">{name}</strong>,</p>

      <p style="font-size: 17px; font-weight: 600; color: #2e7d32; margin-bottom: 20px;">
        We’re thrilled to have you on board! Let’s turn your ideas into beautifully organized notes.
      </p>

      <p style="margin-bottom: 16px;">Here’s what you can start doing right away:</p>

      <ul style="padding-left: 18px; margin: 0 0 24px;">
        <li><strong>Create</strong> public & private notes with ease</li>
        <li><strong>Collaborate</strong> in real-time with your team</li>
        <li><strong>Organize</strong> everything with tags, boards, and filters</li>
        <li><strong>Access</strong> across all devices, anytime</li>
      </ul>

      <p style="margin-bottom: 24px;">Get started by logging in and setting up your first board — it’s quick and fun!</p>

      <div style="text-align: center; margin: 32px 0;">
        <a href="https://thinkboard.app" target="_blank" style="display: inline-block; background: #4CAF50; color: #fff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: bold; font-size: 16px;">Go to Dashboard</a>
      </div>

      <p>Happy organizing!<br /><strong>The ThinkBoard Team</strong></p>
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding: 18px 20px; font-size: 12px; color: #9E9E9E; background: #f9f9f9; border-top: 1px solid #e0e0e0;">
      This is an automated message. Please do not reply to this email.<br />
      &copy; {year} ThinkBoard. All rights reserved.
    </div>
  </div>
</body>
</html>
`;