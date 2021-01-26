import io from 'socket.io-client';

function connection(){
    return io()
}
export default  connection();
