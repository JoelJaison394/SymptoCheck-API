<script>
    import DisplayTable from './DisplayTable.svelte';
</script>

<main>
    <div class="header">
        <img src="https://res.cloudinary.com/dxraggwp4/image/upload/v1694971390/upw8e017nzd3zq80mydd.png" alt="MedCare Logo" class="logo">
        <h1 class="centered-heading">SymptomCheck Data</h1>
    </div>
    
    <!-- Render the DisplayTable component -->
    <DisplayTable />
    <div class="api-coming-soon">
        <p class="api-text">API Coming Soon</p>
    </div>
    <!-- Other content of your page or component -->
</main>

<style>
    /* Add your component's styles here */
    *{
        font-family: 'Poppins', sans-serif;
    }

    img {
        height: 38px;
    }

    .header {
        text-align: center;
    }

    .logo {
        max-width: 100px; /* Adjust the size as needed */
        margin: 0 auto; /* Center the logo horizontally */
    }

    .centered-heading {
        text-align: center;
        font-size: 28px;
        line-height: 32px;
    }


    .api-coming-soon {
        text-align: center;
        margin-top: 20px; /* Adjust the margin as needed */
        animation: pulse 2s infinite; /* Apply the animation */
    }

    .api-text {
        font-weight: bold;
        font-size: 18px; /* Adjust the font size as needed */
    }

    @keyframes pulse {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>
