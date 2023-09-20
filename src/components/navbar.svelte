<script>
    export let activeLink = '/';
  </script>
  
  <nav class="navbar">
    <div class="logo-container">
      <img
        src="https://res.cloudinary.com/dxraggwp4/image/upload/v1694971390/upw8e017nzd3zq80mydd.png"
        alt="MedCare Logo"
        class="logo"
      />
    </div>
    <div class="nav-links">
      <a href="/" class:selected={activeLink === '/'}>Home</a>
      <a href="/api" class:selected={activeLink === '/api'}>APIs</a>
      <a href="/doc" class:selected={activeLink === '/doc'}>Docs</a>
    </div>
  </nav>
  
  <style>
    	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
    .navbar {
		width: 80%;
		height: auto;
		padding: 2px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-left: auto;
		margin-right: auto;
		border: 2px solid rgba(0, 0, 0, 0.262);
		border-radius: 50px;
		position: sticky;
		box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(2px); /* Add a blurred background */
		background: transparent;
	}

	.logo-container > img {
		height: 62px;
	}
	a:link {
		text-decoration: none;
	}
	.nav-links {
		font-size: 24px;
		line-height: 32px;
		text-decoration: none;
		width: 50%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	@keyframes underline {
		0% {
			width: 0;
			left: 0;
		}
		100% {
			width: 100%;
			left: 0;
		}
	}

	/* Apply the animation to the hover effect */
	.nav-links a {
		text-decoration: none;
		position: relative;
	}

	.nav-links a:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2px;
		background-color: #007bff; /* Adjust the color as needed */
		transition: width 0.3s ease, left 0.3s ease;
	}

	.nav-links a:hover:after {
		animation: underline 0.3s ease-in-out forwards;
	}

    .selected {
    color: #007bff; 
    font-weight: bold; 
  }
  </style>
  