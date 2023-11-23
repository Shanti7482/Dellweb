# Generated by Django 4.1 on 2022-11-16 08:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Question',
            fields=[
                ('qno', models.IntegerField(auto_created=True, primary_key=True, serialize=False)),
                ('que', models.CharField(max_length=200)),
                ('option_a', models.CharField(max_length=100)),
                ('option_b', models.CharField(max_length=100)),
                ('option_c', models.CharField(max_length=100)),
                ('option_d', models.CharField(max_length=100)),
                ('answer', models.CharField(max_length=1)),
            ],
        ),
    ]