const Home = ({projects}) => {
  return (
    <main>
      <div className='main-container'>
          {projects.map(project => (
            < div className="project-container" key={project.id}>
               <h5 className="project-title">{project.title}</h5>
               <img src={ project.image} alt="img"/>
                 <button className="btn-link"><a href={project.link}> preview</a> </button>  
        </div>
      ))}
      </div>
    
    </main>
   );
}
 
export default Home;