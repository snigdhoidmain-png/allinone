<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Global Video Chat App - Full Version</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .container {
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            max-width: 1200px;
            width: 100%;
            padding: 30px;
        }

        h1 {
            text-align: center;
            color: #667eea;
            margin-bottom: 10px;
            font-size: 2em;
        }

        .subtitle {
            text-align: center;
            color: #666;
            margin-bottom: 30px;
            font-size: 0.9em;
        }

        .video-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 30px;
        }

        @media (max-width: 768px) {
            .video-container {
                grid-template-columns: 1fr;
            }
        }

        .video-wrapper {
            position: relative;
            background: #000;
            border-radius: 15px;
            overflow: hidden;
            aspect-ratio: 4/3;
        }

        video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .video-label {
            position: absolute;
            top: 10px;
            left: 10px;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.85em;
            font-weight: 500;
        }

        .connection-status {
            position: absolute;
            bottom: 10px;
            right: 10px;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 5px 12px;
            border-radius: 15px;
            font-size: 0.75em;
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .status-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #10b981;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        .controls {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-bottom: 20px;
        }

        .control-group {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        input {
            flex: 1;
            min-width: 200px;
            padding: 12px 20px;
            border: 2px solid #e0e0e0;
            border-radius: 10px;
            font-size: 1em;
            transition: border-color 0.3s;
        }

        input:focus {
            outline: none;
            border-color: #667eea;
        }

        button {
            padding: 12px 30px;
            border: none;
            border-radius: 10px;
            font-size: 1em;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            color: white;
        }

        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        .btn-success {
            background: #10b981;
        }

        .btn-success:hover {
            background: #059669;
        }

        .btn-danger {
            background: #ef4444;
        }

        .btn-danger:hover {
            background: #dc2626;
        }

        .btn-secondary {
            background: #6b7280;
        }

        .btn-secondary:hover {
            background: #4b5563;
        }

        button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .status {
            text-align: center;
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 20px;
            font-weight: 500;
        }

        .status.info {
            background: #dbeafe;
            color: #1e40af;
        }

        .status.success {
            background: #d1fae5;
            color: #065f46;
        }

        .status.error {
            background: #fee2e2;
            color: #991b1b;
        }

        .info-box {
            background: #f3f4f6;
            padding: 20px;
            border-radius: 10px;
            margin-top: 20px;
        }

        .info-box h3 {
            color: #667eea;
            margin-bottom: 10px;
        }

        .info-box p {
            color: #4b5563;
            line-height: 1.6;
            margin-bottom: 8px;
        }

        .button-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 10px;
        }

        .participants {
            background: #f9fafb;
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 15px;
        }

        .participants h4 {
            color: #374151;
            margin-bottom: 8px;
            font-size: 0.9em;
        }

        .participant-list {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .participant-badge {
            background: #667eea;
            color: white;
            padding: 4px 12px;
            border-radius: 15px;
            font-size: 0.8em;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🌍 Global Video Chat</h1>
        <p class="subtitle">Connect with anyone, anywhere in the world</p>

        <div id="status" class="status info">
            Connecting to server...
        </div>

        <div class="participants" id="participants" style="display: none;">
            <h4>👥 Participants in Room:</h4>
            <div class="participant-list" id="participantList"></div>
        </div>

        <div class="video-container">
            <div class="video-wrapper">
                <video id="localVideo" autoplay muted playsinline></video>
                <div class="video-label">You</div>
                <div class="connection-status">
                    <span class="status-dot"></span>
                    <span>Connected</span>
                </div>
            </div>
            <div class="video-wrapper">
                <video id="remoteVideo" autoplay playsinline></video>
                <div class="video-label" id="remoteLabel">Waiting for peer...</div>
            </div>
        </div>

        <div class="controls">
            <div class="control-group">
                <input type="text" id="roomId" placeholder="Enter Room ID (e.g., meeting123)">
                <button class="btn-success" onclick="joinRoom()" id="joinBtn">Join Room</button>
            </div>

            <div class="button-grid">
                <button class="btn-secondary" id="toggleVideo" onclick="toggleVideo()">📹 Video Off</button>
                <button class="btn-secondary" id="toggleAudio" onclick="toggleAudio()">🎤 Mute</button>
                <button class="btn-secondary" onclick="shareScreen()">🖥️ Share Screen</button>
                <button class="btn-danger" onclick="hangUp()" disabled id="hangupBtn">📞 End Call</button>
            </div>
        </div>

        <div class="info-box">
            <h3>📱 How to Use:</h3>
            <p><strong>1. Enter a Room ID:</strong> Type any name for your room (e.g., "meeting123")</p>
            <p><strong>2. Click Join Room:</strong> You'll be connected to the room</p>
            <p><strong>3. Share the Room ID:</strong> Send the room ID to people you want to talk with</p>
            <p><strong>4. They Join:</strong> When they enter the same room ID, you'll connect automatically!</p>
            <p><strong>💡 Tip:</strong> Works on desktop, mobile, and tablets. Make sure to allow camera and microphone access.</p>
        </div>

        <div class="info-box" style="margin-top: 15px; background: #e0f2fe; border-left: 4px solid #0284c7;">
            <h3 style="color: #0284c7;">🔧 Server Setup:</h3>
            <p style="color: #0c4a6e;"><strong>To use this app:</strong></p>
            <p style="color: #0c4a6e;">1. Install Node.js from nodejs.org</p>
            <p style="color: #0c4a6e;">2. Run: <code style="background: white; padding: 2px 6px; border-radius: 3px;">npm install express socket.io cors</code></p>
            <p style="color: #0c4a6e;">3. Start server: <code style="background: white; padding: 2px 6px; border-radius: 3px;">node signaling-server.js</code></p>
            <p style="color: #0c4a6e;">4. Open app at: <code style="background: white; padding: 2px 6px; border-radius: 3px;">http://localhost:3000</code></p>
        </div>
    </div>

    <script src="/socket.io/socket.io.js"></script>
    <script>
        // Configuration
        const SIGNALING_SERVER = 'http://localhost:3000'; // Change this to your server URL
        
        const configuration = {
            iceServers: [
                { urls: 'stun:stun.l.google.com:19302' },
                { urls: 'stun:stun1.l.google.com:19302' },
                { urls: 'stun:stun2.l.google.com:19302' }
            ]
        };

        // Global variables
        let socket;
        let localStream;
        let remoteStream;
        let peerConnections = new Map(); // Support multiple peers
        let currentRoomId;
        let isVideoEnabled = true;
        let isAudioEnabled = true;

        // DOM elements
        const localVideo = document.getElementById('localVideo');
        const remoteVideo = document.getElementById('remoteVideo');
        const statusDiv = document.getElementById('status');
        const roomInput = document.getElementById('roomId');
        const hangupBtn = document.getElementById('hangupBtn');
        const joinBtn = document.getElementById('joinBtn');
        const participantsDiv = document.getElementById('participants');
        const participantList = document.getElementById('participantList');
        const remoteLabel = document.getElementById('remoteLabel');

        // Initialize socket connection
        function initSocket() {
            socket = io(SIGNALING_SERVER);

            socket.on('connect', () => {
                console.log('Connected to signaling server');
                updateStatus('✅ Connected to server. Enter a room ID to start!', 'success');
            });

            socket.on('disconnect', () => {
                console.log('Disconnected from signaling server');
                updateStatus('❌ Disconnected from server. Trying to reconnect...', 'error');
            });

            socket.on('room-users', (users) => {
                console.log('Users in room:', users);
                updateParticipants(users);
            });

            socket.on('user-connected', async (userId) => {
                console.log('User connected:', userId);
                updateStatus('👤 New user joined!', 'success');
                
                // Create offer for the new user
                await createOffer(userId);
            });

            socket.on('user-disconnected', (userId) => {
                console.log('User disconnected:', userId);
                updateStatus('👤 User left the room', 'info');
                
                // Close peer connection
                if (peerConnections.has(userId)) {
                    peerConnections.get(userId).close();
                    peerConnections.delete(userId);
                }
            });

            socket.on('offer', async (data) => {
                console.log('Received offer from:', data.sender);
                await handleOffer(data.offer, data.sender);
            });

            socket.on('answer', async (data) => {
                console.log('Received answer from:', data.sender);
                await handleAnswer(data.answer, data.sender);
            });

            socket.on('ice-candidate', async (data) => {
                console.log('Received ICE candidate from:', data.sender);
                await handleIceCandidate(data.candidate, data.sender);
            });
        }

        // Initialize local stream
        async function initLocalStream() {
            try {
                localStream = await navigator.mediaDevices.getUserMedia({
                    video: { 
                        width: { ideal: 1280 },
                        height: { ideal: 720 }
                    },
                    audio: {
                        echoCancellation: true,
                        noiseSuppression: true,
                        autoGainControl: true
                    }
                });
                localVideo.srcObject = localStream;
                return true;
            } catch (error) {
                updateStatus('❌ Error accessing camera/microphone: ' + error.message, 'error');
                console.error('Error accessing media devices:', error);
                return false;
            }
        }

        // Join room
        async function joinRoom() {
            const roomId = roomInput.value.trim();
            if (!roomId) {
                updateStatus('⚠️ Please enter a room ID', 'error');
                return;
            }

            if (!localStream) {
                const success = await initLocalStream();
                if (!success) return;
            }

            currentRoomId = roomId;
            socket.emit('join-room', roomId);
            
            updateStatus(`📍 Joined room: ${roomId}`, 'success');
            hangupBtn.disabled = false;
            joinBtn.disabled = true;
            roomInput.disabled = true;
            participantsDiv.style.display = 'block';
        }

        // Create peer connection
        function createPeerConnection(peerId) {
            const peerConnection = new RTCPeerConnection(configuration);

            // Add local stream tracks
            localStream.getTracks().forEach(track => {
                peerConnection.addTrack(track, localStream);
            });

            // Handle incoming tracks
            peerConnection.ontrack = (event) => {
                console.log('Received remote track');
                if (event.streams && event.streams[0]) {
                    remoteVideo.srcObject = event.streams[0];
                    remoteLabel.textContent = 'Remote User';
                    updateStatus('🎥 Connected! You can now see each other.', 'success');
                }
            };

            // Handle ICE candidates
            peerConnection.onicecandidate = (event) => {
                if (event.candidate) {
                    socket.emit('ice-candidate', {
                        target: peerId,
                        candidate: event.candidate
                    });
                }
            };

            // Handle connection state
            peerConnection.onconnectionstatechange = () => {
                console.log('Connection state:', peerConnection.connectionState);
                if (peerConnection.connectionState === 'connected') {
                    updateStatus('✅ Connected successfully!', 'success');
                } else if (peerConnection.connectionState === 'disconnected') {
                    updateStatus('⚠️ Connection lost', 'error');
                }
            };

            peerConnections.set(peerId, peerConnection);
            return peerConnection;
        }

        // Create offer
        async function createOffer(peerId) {
            const peerConnection = createPeerConnection(peerId);
            
            try {
                const offer = await peerConnection.createOffer();
                await peerConnection.setLocalDescription(offer);
                
                socket.emit('offer', {
                    target: peerId,
                    offer: offer
                });
            } catch (error) {
                console.error('Error creating offer:', error);
                updateStatus('❌ Error creating connection', 'error');
            }
        }

        // Handle incoming offer
        async function handleOffer(offer, peerId) {
            const peerConnection = createPeerConnection(peerId);
            
            try {
                await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
                
                const answer = await peerConnection.createAnswer();
                await peerConnection.setLocalDescription(answer);
                
                socket.emit('answer', {
                    target: peerId,
                    answer: answer
                });
            } catch (error) {
                console.error('Error handling offer:', error);
                updateStatus('❌ Error establishing connection', 'error');
            }
        }

        // Handle incoming answer
        async function handleAnswer(answer, peerId) {
            const peerConnection = peerConnections.get(peerId);
            if (peerConnection) {
                try {
                    await peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
                } catch (error) {
                    console.error('Error handling answer:', error);
                }
            }
        }

        // Handle ICE candidate
        async function handleIceCandidate(candidate, peerId) {
            const peerConnection = peerConnections.get(peerId);
            if (peerConnection) {
                try {
                    await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
                } catch (error) {
                    console.error('Error handling ICE candidate:', error);
                }
            }
        }

        // Toggle video
        function toggleVideo() {
            if (localStream) {
                isVideoEnabled = !isVideoEnabled;
                localStream.getVideoTracks()[0].enabled = isVideoEnabled;
                document.getElementById('toggleVideo').textContent = 
                    isVideoEnabled ? '📹 Video Off' : '📹 Video On';
            }
        }

        // Toggle audio
        function toggleAudio() {
            if (localStream) {
                isAudioEnabled = !isAudioEnabled;
                localStream.getAudioTracks()[0].enabled = isAudioEnabled;
                document.getElementById('toggleAudio').textContent = 
                    isAudioEnabled ? '🎤 Mute' : '🎤 Unmute';
            }
        }

        // Share screen
        async function shareScreen() {
            try {
                const screenStream = await navigator.mediaDevices.getDisplayMedia({
                    video: true
                });
                
                const screenTrack = screenStream.getVideoTracks()[0];
                
                // Replace video track in all peer connections
                peerConnections.forEach(peerConnection => {
                    const sender = peerConnection.getSenders().find(s => 
                        s.track && s.track.kind === 'video'
                    );
                    if (sender) {
                        sender.replaceTrack(screenTrack);
                    }
                });
                
                // Update local video
                localVideo.srcObject = screenStream;
                
                // Handle screen sharing stop
                screenTrack.onended = () => {
                    localVideo.srcObject = localStream;
                    peerConnections.forEach(peerConnection => {
                        const sender = peerConnection.getSenders().find(s => 
                            s.track && s.track.kind === 'video'
                        );
                        if (sender) {
                            sender.replaceTrack(localStream.getVideoTracks()[0]);
                        }
                    });
                };
                
            } catch (error) {
                console.error('Error sharing screen:', error);
                updateStatus('❌ Screen sharing not available', 'error');
            }
        }

        // Hang up
        function hangUp() {
            // Close all peer connections
            peerConnections.forEach(peerConnection => {
                peerConnection.close();
            });
            peerConnections.clear();
            
            // Stop local stream
            if (localStream) {
                localStream.getTracks().forEach(track => track.stop());
                localStream = null;
            }
            
            localVideo.srcObject = null;
            remoteVideo.srcObject = null;
            
            hangupBtn.disabled = true;
            joinBtn.disabled = false;
            roomInput.disabled = false;
            roomInput.value = '';
            participantsDiv.style.display = 'none';
            remoteLabel.textContent = 'Waiting for peer...';
            
            updateStatus('📞 Call ended. Ready to start a new call.', 'info');
            
            // Disconnect from socket room
            if (socket) {
                socket.disconnect();
                initSocket();
            }
        }

        // Update participants list
        function updateParticipants(users) {
            participantList.innerHTML = '';
            users.forEach(userId => {
                const badge = document.createElement('span');
                badge.className = 'participant-badge';
                badge.textContent = '👤 User';
                participantList.appendChild(badge);
            });
            
            // Add yourself
            const selfBadge = document.createElement('span');
            selfBadge.className = 'participant-badge';
            selfBadge.style.background = '#10b981';
            selfBadge.textContent = '👤 You';
            participantList.appendChild(selfBadge);
        }

        // Update status
        function updateStatus(message, type) {
            statusDiv.textContent = message;
            statusDiv.className = `status ${type}`;
        }

        // Initialize app
        initSocket();

        // Clean up on page unload
        window.addEventListener('beforeunload', () => {
            if (localStream) {
                localStream.getTracks().forEach(track => track.stop());
            }
            peerConnections.forEach(peerConnection => {
                peerConnection.close();
            });
        });
    </script>
</body>
</html>
