this.Welcome =$page ("Welcom page", {
	loginButton: ".button.login"
});

this.LoginPage = $page("Login page",{
username: "input[name='login.username]",
password: "input[name='login.password']",
loginButton: ".button-login"
});