from flask import Blueprint, request, jsonify
from backend.db.models import CartItem, db

cart_bp = Blueprint('cart', __name__)

@cart_bp.route('/cart', methods=['GET'])
def get_cart():
    cart_items = CartItem.query.all()
    return jsonify([item.to_dict() for item in cart_items])

@cart_bp.route('/cart', methods=['POST'])
def add_to_cart():
    data = request.json
    new_item = CartItem(product_id=data['product_id'], quantity=data['quantity'])
    db.session.add(new_item)
    db.session.commit()
    return jsonify(new_item.to_dict()), 201

@cart_bp.route('/cart/<int:item_id>', methods=['PUT'])
def update_cart_item(item_id):
    data = request.json
    item = CartItem.query.get_or_404(item_id)
    item.quantity = data['quantity']
    db.session.commit()
    return jsonify(item.to_dict())

@cart_bp.route('/cart/<int:item_id>', methods=['DELETE'])
def remove_cart_item(item_id):
    item = CartItem.query.get_or_404(item_id)
    db.session.delete(item)
    db.session.commit()
    return jsonify({'message': 'Item removed from cart'}), 204