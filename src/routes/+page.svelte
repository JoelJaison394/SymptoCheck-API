<script>
	import Table from '../components/table.svelte';
	import Navbar from '../components/navbar.svelte';


    let activeRoute = '/'
</script>

<body>
	<main>
		<Navbar activeLink="{activeRoute}"/>
		<!-- Render the DisplayTable component -->
		<h1 class="centered-heading">SymptomCheck Data</h1>
		<Table />
		<div class="api-coming-soon">
			<p class="api-text">API Coming Soon</p>
		</div>
		<!-- Other content of your page or component -->
	</main>
</body>

<style>
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	body {
		padding: 0px;
		margin: 0px;
		box-sizing: border-box;
        min-height: 100vh;
	}

	main {
		position: relative;
		background-image: url(../assets/symptocheck.png);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		height: 100vh;
		width: 100vw;
		padding-top: 10px;
	}

	.centered-heading {
		text-align: center;
		color: #ffff;
		line-height: 32px;
		padding: 5px;
	}
</style>
