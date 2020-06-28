package com.example.scoreboard;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    TextView tv1;
    TextView tv2;

    Button b1a;
    Button b2a;
    Button b3a;

    Button b1b;
    Button b2b;
    Button b3b;

    Button r;

    int a1, b1 = 0;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        tv1 = findViewById(R.id.teamAScore);
        tv2 = findViewById(R.id.teamBScore);

        b1a = findViewById(R.id.onePointA);
        b2a = findViewById(R.id.twoPointA);
        b3a = findViewById(R.id.threePointA);

        b1b = findViewById(R.id.onePointB);
        b2b = findViewById(R.id.twoPointB);
        b3b = findViewById(R.id.threePointB);

        r = findViewById(R.id.resetButton);


        b1a.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Action
                a1++;
                tv1.setText(""+a1);
            }
        });
        b2a.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Action
                a1+=2;
                tv1.setText(""+a1);
            }
        });
        b3a.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Action
                a1+=3;
                tv1.setText(""+a1);
            }
        });


        b1b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Action
                b1++;
                tv2.setText(""+b1);
            }
        });
        b2b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Action
                b1+=2;
                tv2.setText(""+b1);
            }
        });
        b3b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Action
                b1+=3;
                tv2.setText(""+b1);
            }
        });

        r.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Action
                a1=0;
                b1=0;
                tv1.setText(""+0);
                tv2.setText(""+0);
            }
        });

        if (savedInstanceState!=null){
            String st = savedInstanceState.getString("sai");
            String str = savedInstanceState.getString("ai");
            a1 = Integer.parseInt(st);
            b1 = Integer.parseInt(str);
            tv1.setText(""+a1);
            tv2.setText(""+b1);
        }

    }

    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);

        outState.putString("sai",tv1.getText().toString());
        outState.putString("ai",tv2.getText().toString());
    }
}
