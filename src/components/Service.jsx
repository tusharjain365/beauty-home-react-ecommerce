const Service = ({icon, title , content})=>{
    return (
    <div className="service">
        <section className="icon">
            {icon}
        </section>
        <h3>{title }</h3>
        <section className="para">
        <p>{content}</p>
        </section>
    </div>
    )
}

export default Service;