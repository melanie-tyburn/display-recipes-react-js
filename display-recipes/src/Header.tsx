import './Header.scss'
interface HeaderProps {
    title: string;
    author: string;
    difficulty: string;
    thumbnail: string;
}
const Header = ({title, author, difficulty, thumbnail} : HeaderProps) => {
    return (
        <div className='header'>
          <img className='img' src={thumbnail} alt={title} />
          <div className='content'>
            <h1 className='title'>{title}</h1>
            <p className='author-diff'>{author} - {difficulty}</p>
          </div>
        </div>
      );
}

export default Header