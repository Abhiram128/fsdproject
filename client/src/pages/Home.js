import Navbar from '../components/Navbar';
import About from '../components/About';
import Ourvalues from '../components/Ourvalues';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

function Home() {
  const backgroundImageStyle = {
    backgroundImage: `url('https://www.cbit.ac.in/wp-content/uploads/2019/01/ABOUT_TAB-1-1-scaled.jpeg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative', // Set position to relative
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(64, 64, 64, 0.7)', // Set the overlay color with the desired opacity
    borderRadius: '2rem', // Match the border radius of the parent div
    color:'white'
  };

  const buttonStyle = {
    //background: 'rgba(113, 7, 190, 0.8)', // Adjust the alpha value (0.8) for opacity
    border: '2px solid black',
    color:'#FAF6F0'
  };

  return (
    <>
      <div className='px-52 space-y-8 bg-[#E9EBE7]'>
        <div
          className="relative bg-[#385529] min-h-[80vh] border border-black rounded-[2rem] p-14 text-white"
          style={backgroundImageStyle}
        >
          <div style={overlayStyle}></div>
          <div className='w-1/2 space-y-6 relative z-10'> {/* Ensure text is on top of the overlay */}
            <h1 className='text-5xl font-bold'> Welcome to the Alumni network of CBIT </h1>
            <p className='font-bold'>Whether you graduated yesterday or decades ago, you are always part of the CBIT family</p>
          </div>

          <div className='flex space-x-6 relative z-10'> {/* Ensure buttons are on top of the overlay */}
            <button className='border py-[0.5em] px-6 rounded-lg text-white font-thin' style={buttonStyle}>
              Get started!
            </button>
            <button className='border py-[0.5em] px-6 rounded-lg text-white font-thin' style={buttonStyle}>
              Explore
            </button>
          </div>
        </div>
      </div>

      <About />
      <Ourvalues />
      <Newsletter />
    </>
  );
}

export default Home;
