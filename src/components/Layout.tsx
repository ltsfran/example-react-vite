export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <header />
    <main>{children}</main>
    <footer />
  </>
)