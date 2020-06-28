package com.example.counting;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    TextView text;
    Button a;
    Button s;
    Button r;
    Button t;
    int num = 0;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        text = findViewById(R.id.tv);
        a = findViewById(R.id.add);
        s = findViewById(R.id.subtract);
        r = findViewById(R.id.reset);
        t = findViewById(R.id.toast);

        a.setOnClickListener(new View.OnClickListener(){
            public void onClick(View v) {
                // Action
                num++;
                text.setText(""+num);
            }
        });

        s.setOnClickListener(new View.OnClickListener(){
            public void onClick(View v) {
                // Action
                num--;
                text.setText(""+num);
            }
        });

        r.setOnClickListener(new View.OnClickListener(){
            public void onClick(View v) {
                // Action
                num = 0;
                text.setText("0");
            }
        });

        t.setOnClickListener(new View.OnClickListener(){
            public void onClick(View v) {
                // Action

                text.setText("The current count is : "+num );
            }
        });

        if (savedInstanceState!=null){
            String st = savedInstanceState.getString("sai");
            num = Integer.parseInt(st);
            text.setText(""+num);
        }
    }

    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);

        outState.putString("sai",text.getText().toString());
    }


}
