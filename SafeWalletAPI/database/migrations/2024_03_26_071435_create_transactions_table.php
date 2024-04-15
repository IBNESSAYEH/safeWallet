<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sender_wallet_id')->constrained('wallets')->onDelete('cascade')->nullable();
            $table->foreignId('recipient_wallet_id')->constrained('wallets')->onDelete('cascade')->nullable();
            $table->decimal('amount', 10, 2);
            $table->enum('type', ['deposit', 'withdrawal', 'transfer']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transactions');
    }
}
