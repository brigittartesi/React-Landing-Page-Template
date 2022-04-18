import { useMediaQuery } from 'react-responsive';
export const Navigation = (props) => {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            <img src="img/logo-resized.png" className="img-responsive" alt="" />
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#about' className='page-scroll' data-toggle={isMobile ? "collapse" : ""} data-target={isMobile ? "#bs-example-navbar-collapse-1" : ""}>
                About
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll' data-toggle={isMobile ? "collapse" : ""} data-target={isMobile ? "#bs-example-navbar-collapse-1" : ""}>
                Services
              </a>
            </li>
            {/* <li>
              <a href='#commercial' className='page-scroll' data-toggle={isMobile ? "collapse" : ""} data-target={isMobile ? "#bs-example-navbar-collapse-1" : ""}>
                Commercial
              </a>
            </li>
            <li>
              <a href='#residential' className='page-scroll' data-toggle={isMobile ? "collapse" : ""} data-target={isMobile ? "#bs-example-navbar-collapse-1" : ""}>
                Residential
              </a>
            </li>
            <li>
              <a href='#civil-industrial' className='page-scroll' data-toggle={isMobile ? "collapse" : ""} data-target={isMobile ? "#bs-example-navbar-collapse-1" : ""}>
                Civil & Industrial
              </a>
            </li> */}
            <li>
              <a href='#portfolio' className='page-scroll' data-toggle={isMobile ? "collapse" : ""} data-target={isMobile ? "#bs-example-navbar-collapse-1" : ""}>
                Gallery
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll' data-toggle={isMobile ? "collapse" : ""} data-target={isMobile ? "#bs-example-navbar-collapse-1" : ""}>
                Testimonials
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll' data-toggle={isMobile ? "collapse" : ""} data-target={isMobile ? "#bs-example-navbar-collapse-1" : ""}>
                Team
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll' data-toggle={isMobile ? "collapse" : ""} data-target={isMobile ? "#bs-example-navbar-collapse-1" : ""}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
