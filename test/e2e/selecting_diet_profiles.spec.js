describe ('Diet profiles', function() {

  it('should display a list of profiles', function() {
    browser.get('#/diet_profiles');
    expect($('.profile-name').getText()).toMatch('Nut Allergy');
  });

  it ("should display a list of ingredients" , function() {
    browser.get('#/diet_profiles');
    expect($('.ingredient-name').getText()).toMatch('Peanut');
  });
});