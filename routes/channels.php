<?php

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Log;

Broadcast::channel('online', function (User $user) {
    return $user ? new UserResource($user) : null;
});

Broadcast::channel('message.user.{userId1}-{userId2}', function (User $user, $userId1, $userId2) {
    return ($user->id == $userId1 || $user->id == $userId2) ? $user : null;
});

Broadcast::channel('message.group.{groupId}', function (User $user, $groupId) {
    return $user->groups->contains('id', $groupId) ? $user : null;
});
