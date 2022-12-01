package com.uae360.app;

import android.os.Bundle;
import com.codetrixstudio.capacitor.GoogleAuth.GoogleAuth;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    public void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);

        registerPlugin(GoogleAuth.class);
        registerPlugin(
      com.getcapacitor.community.facebooklogin.FacebookLogin.class
    );
    }
}
