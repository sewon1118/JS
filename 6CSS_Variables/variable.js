const inputs = document.querySelectorAll('.variables input');

function handleUpdate() {
  console.log(this.value);
  const suffix = this.dataset.sizing || ''; // color 공백
  document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate)); 
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); // range-bar 드래그하는 동시에 값 보기 