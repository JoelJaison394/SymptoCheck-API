<script>
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabaseClient';

	let data = [];
	let currentPage = 1;
	const rowsPerPage = 10;
	let searchQuery = '';
	let filteredData = [];

	const search = async () => {
		try {
			filteredData = data.filter((item) =>
				item.Disease.toLowerCase().includes(searchQuery.toLowerCase())
			);

			currentPage = 1;
			totalPages = Math.ceil(filteredData.length / rowsPerPage);
		} catch (error) {
			console.error('An error occurred:', error.message);
		}
	};

	let totalPages = 0;

	const fetchData = async () => {
		try {
			let { data: fetchedData, error } = await supabase.from('diseases').select('*');

			if (error) {
				console.error('Error:', error.message);
				return;
			}

			console.log('Fetched Data:', fetchedData);
			data = fetchedData;
			totalPages = Math.ceil(data.length / rowsPerPage);
			search(); // Initial search to populate filteredData
		} catch (error) {
			console.error('An error occurred:', error.message);
		}
	};

	onMount(() => {
		fetchData();
	});
	const changePage = (newPage) => {
		currentPage = newPage;
	};

	const handleClear = () => {
		searchQuery = '';
		filteredData = [];
	};
</script>

<div class="table-container">
	<div class="search-container">
		<input type="text" placeholder="Search by Disease" bind:value={searchQuery} on:input={search} />
		<button on:click={handleClear}>Clear</button>
	</div>

	{#if searchQuery !== ''}
		<table>
			<thead>
				<tr>
					<th>Disease</th>
					<th>Symptom 1</th>
					<th>Symptom 2</th>
					<th>Symptom 3</th>
				</tr>
			</thead>
			<tbody>
				{#if filteredData.length > 0}
					{#each filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage) as item (item._id)}
						<tr>
							<td>{item.Disease}</td>
							<td>{item.Symptom_0}</td>
							<td>{item.Symptom_1}</td>
							<td>{item.Symptom_2}</td>
							<!-- Add more table cells for additional columns -->
						</tr>
					{/each}
				{:else}
					<tr>
						<td colspan="4">No data found.</td>
					</tr>
				{/if}
			</tbody>
		</table>
	{:else if data.length > 0}
		<table>
			<thead>
				<tr>
					<th>Disease</th>
					<th>Symptom 1</th>
					<th>Symptom 2</th>
					<th>Symptom 3</th>
				</tr>
			</thead>
			<tbody>
				{#if data.length > 0}
					{#each data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage) as item (item._id)}
						<tr>
							<td>{item.Disease}</td>
							<td>{item.Symptom_0}</td>
							<td>{item.Symptom_1}</td>
							<td>{item.Symptom_2}</td>
						</tr>
					{/each}
				{:else}
					<tr>
						<td colspan="4">No data found.</td>
					</tr>
				{/if}
			</tbody>
		</table>
	{:else}
		<p>No data available.</p>
	{/if}
</div>
{#if totalPages > 1}
	<div class="pagination">
		<button on:click={() => changePage(currentPage - 1)} disabled={currentPage === 1}
			>Previous</button
		>
		<span>Page {currentPage} of {totalPages}</span>
		<button on:click={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}
			>Next</button
		>
	</div>
{/if}

<style>
    	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	/* Add your table styling here */
	.table-container {
		overflow-x: hidden;
		height: auto; /* Enable horizontal scrolling on small screens */
	}

	table {
		margin-left: auto;
		margin-right: auto;
		width: 90%;
		border-collapse: collapse;
		margin-top: 16px;
		scroll-behavior: auto;
	}

	th,
	td {
		padding: 10px 12px;
		text-align: left;
		border-bottom: 1px solid #ddd;
        font-size: 18px;
	}

	th {
		background-color: #f2f2f244;
	}

	/* tbody tr:nth-child(even) {
		background-color: #f2f2f2;
	}
    tbody tr:nth-child(odd) {
		background-color: #ffffff;
	} */

	tbody tr:hover {
		background-color: #a0beff73;
		transition: background-color 0.2s;
	}

	/* Pagination styles */
	.pagination {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 16px;
	}

	.pagination button {
		padding: 8px 16px;
		background-color: #007bff;
		color: white;
		border: none;
		cursor: pointer;
	}

	.pagination button:disabled {
		background-color: #c5a2f4;
		cursor: not-allowed;
	}

	.search-container {
		margin-bottom: 16px;
		text-align: center;
	}

	.search-container input {
		padding: 8px;
		width: 30%;
		border: 1px solid #ccc;
		border-radius: 4px;
	}
</style>
