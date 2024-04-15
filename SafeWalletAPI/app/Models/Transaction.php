<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'recipient_wallet_id',
        'sender_wallet_id',
        'amount',
        'type'
    ];

    public function senderWallet()
    {
        return $this->belongsTo(Wallet::class, 'sender_wallet_id');
    }

    public function recipientWallet()
    {
        return $this->belongsTo(Wallet::class, 'recipient_wallet_id');
    }

}
