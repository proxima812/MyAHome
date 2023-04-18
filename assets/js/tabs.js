const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

function showPanel(panelIndex) {
  tabButtons.forEach(function(node) {
    node.classList.remove('active');
  });
  tabButtons[panelIndex].classList.add('active');
  tabPanels.forEach(function(node) {
    node.style.display = 'none';
  });
  tabPanels[panelIndex].style.display = 'flex';
}

showPanel(0); // show first panel initially

tabButtons.forEach(function(node, index) {
  node.addEventListener('click', function() {
    showPanel(index);
  });
});
