<script>
	import '../app.css';
</script>

<svelte:head>
	<title>SolMaster - Your Gateway to the Solana Ecosystem</title>
</svelte:head>

<div
	class="flex min-h-screen flex-col bg-[#0C192B] bg-[url('/bg.webp')] bg-cover bg-center bg-no-repeat"
>
	<main
		class="mx-auto flex w-full max-w-screen-xl grow flex-col items-center gap-6 px-8 pt-8 lg:flex-row lg:px-32"
	>
		<div class="grow">
			<div class="mb-2 text-center lg:text-left">
				<img src="/logo.png" alt="SolMaster" class="inline-block w-[100px] lg:w-[178px]" />
			</div>
			<h1 class="text-center font-ibm-plex-mono text-[60px] text-white lg:text-left lg:text-[80px]">
				SolMaster
			</h1>
			<h3
				class="mb-16 text-center font-ibm-plex-sans text-[30px] font-light text-[#FAFAFA] lg:text-left"
			>
				Your Gateway to the Solana Ecosystem
			</h3>
			<p class="max-w-[460px] font-ibm-plex-sans text-[30px] text-white">
				<span class="font-bold text-[#12ECAB]">SolMaster</span> offers an educational bot and app that
				provides comprehensive theory and practical guidance, including simulators, to ease the learning
				curve.
			</p>
			<a
				href="/SolMaster.pdf"
				target="_blank"
				class="mt-8 inline-block w-full rounded-full bg-[#12ECAB] px-20 py-4 text-center font-ibm-plex-sans text-[30px] font-medium text-[#050505] hover:bg-[#12FCAB] lg:w-auto"
				>Start Now</a
			>
		</div>
		<div class="">
			<img
				src="/phone.webp"
				alt="SolMaster"
				class="mx-auto mb-16 mt-16 block w-full max-w-[375px]"
			/>
		</div>
	</main>
	<footer
		class="mx-auto my-4 w-full max-w-screen-xl px-6 text-center font-ibm-plex-sans text-xs text-white lg:text-base"
	>
		Copyright © 2024 SolMaster. All rights reserved.
	</footer>
</div>
