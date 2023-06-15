function Title(title) {
  return (
    <div className='section-title'>
      <h2>
        {title.title} <span>{title.subTitle}</span>
      </h2>
    </div>
  );
}
export default Title;
