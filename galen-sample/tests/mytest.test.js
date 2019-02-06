load("myPages.js");

test("Login page", function() {
	var driver = createDriver("testapp.galenframework.com", "1024x768");
	
	var welcomPage = new WelcomePage(driver);
	WelcomePage.loginButton.click();
	
	//var loginPage = new loginPage(driver);
	//loginPage.username.typeText("testuser@example.com");
	//loginPage.password.typeText("test123");
	
	//checklayout(driver, "loginPage.gspec", "desktop");
});