/*
 * Global Constants
 */
export const AppVersion = "0.1.0";
export const DappName = "Polkadot Tooling Collective - Frontpage";
export const PolkadotUrl =
  "https://polkadot-tooling-collective.github.io/frontpage";

export const GithubOwner = "polkadot-tooling-collective";
export const GithubRepo = "";
export const GithubApiUrl = `https://api.github.com/repos/${GithubOwner}/${GithubRepo}`;

export const SideMenuMaximisedWidth = 185;
export const SideMenuMinimisedWidth = 75;
export const SideMenuStickyThreshold = 1150;
export const SectionFullWidthThreshold = 1000;
export const ShowAccountsButtonWidthThreshold = 825;
export const FloatingMenuWidth = 250;
export const SmallFontSizeMaxWidth = 600;
export const TipsThresholdSmall = 750;
export const TipsThresholdMedium = 1200;

/*
 * locale
 */
export const DefaultLocale = "en";

/*
 * Colors
 */

export const colors = {
  primary: "#FF8C00",
  primaryHover: "#FFA93F",
  bgPrimary: "#fefefe",
};

export const lightTheme = {
  components: {
    Form: {
      labelColor: "#000",
      colorPrimary: colors.primary,
      algorithm: true,
    },
    Menu: {
      colorPrimary: colors.primary,
      colorBgContainer: "var(--background-primary)",
      colorFillAlter: "#eee",
      /* here is your component tokens */
    },
    Button: {
      colorPrimary: colors.primary,
      colorPrimaryHover: colors.primaryHover,
    },
  },
};

export const darkTheme = {
  components: {
    Form: {
      labelColor: "white",
      colorPrimary: colors.primary,
    },
    Menu: {
      colorPrimary: colors.primary,
      colorBgContainer: "var(--background-primary)",
      colorFillAlter: "#eee",
      /* here is your component tokens */
    },
    Button: {
      colorPrimary: colors.primary,
      colorPrimaryHover: colors.primaryHover,
    },
  },
};
