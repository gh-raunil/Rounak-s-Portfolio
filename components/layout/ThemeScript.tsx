export default function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              var stored = localStorage.getItem('theme');
              var params = new URLSearchParams(window.location.search);
              var queryTheme = params.get('theme');
              var theme = (queryTheme === 'light' || queryTheme === 'dark') ? queryTheme : stored;
              if (!theme) {
                var prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
                theme = prefersLight ? 'light' : 'dark';
              }
              document.documentElement.setAttribute('data-theme', theme);
            } catch (e) {
              document.documentElement.setAttribute('data-theme', 'dark');
            }
          })();
        `,
      }}
    />
  );
}
