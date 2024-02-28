import Navbar from "./_components/navbar";

export default function Marketlayout({children}:{children:React.ReactNode}){
  return(
    <div>
      <Navbar/>
      <main>
          {children}
      </main>
    
    </div>
  )
} 