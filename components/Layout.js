import layoutStyles from '../styles/Layouts.module.css'

const Layout = ({children}) => {
  return (
    <>
        <div className={layoutStyles.container}>
            <main>
                {children}
            </main>
        </div>    
    </>
  )
}

export default Layout