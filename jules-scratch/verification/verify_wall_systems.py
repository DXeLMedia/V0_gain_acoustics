
from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:3000")
    page.screenshot(path="jules-scratch/verification/01_initial_page.png")
    page.click('text="Acoustic Wall Systems Samples"')
    page.wait_for_timeout(1000)  # Wait for scroll to finish
    page.screenshot(path="jules-scratch/verification/verification.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
