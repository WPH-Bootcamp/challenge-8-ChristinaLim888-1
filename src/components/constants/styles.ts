export const styles = {
  layout: {
    /**
     * Max Width
     *
     * Mobile   : 100%
     * Desktop  : 1280px
     */
    container:
      "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10",

    /**
     * Section Spacing
     *
     * Mobile : 56px
     * Desktop : 80px
     */
    section: "py-14 lg:py-20",

    /**
     * Hero
     */
    hero: "min-h-screen",

    /**
     * Navbar Height
     */
    navbar: "h-20",
  },

  typography: {
    sectionTitle:
      "text-2xl font-bold tracking-tight text-white lg:text-4xl",

    sectionDescription:
      "mt-3 text-sm text-gray-400 lg:text-base",
  },
};

/*
Container
className={styles.layout.container}

Section
className={styles.layout.section}

Judul
className={styles.typography.sectionTitle}

Ini jauh lebih mudah dirawat.
*/