import Title from "./Title";
import { tours } from "../data";
function Tours() {
  return (
    <section className='section' id='tours'>
      <Title title='featured' subTitle='tours'></Title>

      <div className='section-center featured-center'>
        {tours.map((tours) => {
          return (
            <article className='tour-card' key={tours.id}>
              <div className='tour-img-container'>
                <img src={tours.image} className='tour-img' alt='' />
                <p className='tour-date'>{tours.date}</p>
              </div>
              <div className='tour-info'>
                <div className='tour-title'>
                  <h4>{tours.title}</h4>
                </div>
                <p>{tours.info}</p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className='fas fa-map'></i>
                    </span>
                    {tours.location}
                  </p>
                  <p>{tours.duration} days</p>
                  <p>from ${tours.price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
export default Tours;
