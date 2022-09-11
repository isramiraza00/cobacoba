Vue.component('header-wrapp',{
	template: `
		<header>
			<div class="logo">
				<img src="assets/img/logo.png" height="70">
				<span>MBAYU</span>
			</div>
			<ul>
				<li><a href="#html">Home</a></li>
				<li><a href="#data_anak">Data Anak</a></li>
				<li><a href="#lokasi">Lokasi</a></li>
				<li><a href="#tentang">Tentang</a></li>
				<li><a href="#footer">Kontak</a></li>
				<li><a href="" class="btn-login">Login</a></li>
			</ul>
			<div class="menu-toogle">
				<input type="checkbox" name="" class="cb">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</header>
	`
})

Vue.component('welcome-page',{
	template: `
		<div class="page satu">
			<a href="" class="btn-prev">
				<img src="assets/img/prev.png" height="80">
			</a>
			<img src="assets/img/phone.png" height="500">
			<a href="" class="btn-next">
				<img src="assets/img/next.png" height="80">
			</a>
		</div>
	`
})

Vue.component('lokasi',{
	template: `
		<div class="page tiga" id="lokasi">
			<h3>Lokasi</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			<img src="assets/img/map.png">
		</div>
	`
})

Vue.component('tentang',{
	template: `
		<div class="page empat" id="tentang">
			<h3>Tentang</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</div>
	`
})

Vue.component(`footer-wrapp`,{
	template: `
		<footer class="footer" id="footer">
			<p>&copy;2022</p>
		</footer>
	`
})


const vm = new Vue({
		el: '#app',
		data: {
			
		},
		methods: {
			
		},
		computed: {
			
		}
	})