export class CustomerHomePage {
  constructor(page) {
    this.page = page;

    this.pageTitle = page.locator(`//div[@class="login_logo"]`);

    this.moreInformationLink = page.getByRole('link', {
      name: 'More information...',
    });
  }

  async open() {
    await this.page.goto('/');
  }

  getPageTitle() {
    return this.pageTitle;
  }

  async clickMoreInformation() {
    await this.moreInformationLink.click();
  }
}