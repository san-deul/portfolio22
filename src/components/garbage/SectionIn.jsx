export default function SectionIn({children, className}){
  return(
    <section className={`section_in  ${className || ''}`}>
      {children}
    </section>
  )
}