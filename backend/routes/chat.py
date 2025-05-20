from flask import Blueprint, request, jsonify
from backend.db.models import ChatMessage

chat_bp = Blueprint('chat', __name__)

@chat_bp.route('/chat/messages', methods=['GET'])
def get_messages():
    messages = ChatMessage.query.all()
    return jsonify([message.to_dict() for message in messages])

@chat_bp.route('/chat/messages', methods=['POST'])
def send_message():
    data = request.json
    new_message = ChatMessage(content=data['content'], sender=data['sender'])
    new_message.save()
    return jsonify(new_message.to_dict()), 201