echo "Ensure Ganache is up and listening on port 7545"
echo "modify truffle.js if not port 7545"
echo "or config Ganache to listen on 7545"
read -p "Press anykey to continue..."
truffle migrate --network ganache --reset
echo "end of script"